import i18n from "i18next";
import { LeftArrow } from "neetoicons";
import { Typography ,Checkbox,Button} from "neetoui";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import withTitle from "utils/withTitle";
import { PageLoader } from "../commons";
import { useFetchCountries , useCreateOrder} from "hooks/reactQuery/useCheckoutApi";
import { setToLocalStorage, getFromLocalStorage } from "utils/storage";
import { Form as NeetoUIForm } from "neetoui/formik";
import { useRef, useState } from "react";
import {
  CHECKOUT_FORM_INITIAL_VALUES, CHECKOUT_FORM_VALIDATION_SCHEMA,CHECKOUT_LOCAL_STORAGE_KEY,
} from "./constants";
import Form from "./Form";
import useCartItemsStore from "stores/useCartItemsStore";
import route from "routes";
import Items from "./Items";
import { useFetchCartProducts } from "hooks/reactQuery/useProductsApi";
import { keys, } from "ramda";
import { isEmpty } from "ramda";
const Checkout = () => {
  const timerRef = useRef(null);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const { t } = useTranslation();
  const history = useHistory();
  const { cartItems, clearCart } = useCartItemsStore.pick();
  const checkboxRef = useRef(null);
  const checkoutFormData = getFromLocalStorage(CHECKOUT_LOCAL_STORAGE_KEY);

  const { isLoading: isLoadingProducts } = useFetchCartProducts(
    keys(cartItems)
  );
  const { isLoading: isLoadingCountries } = useFetchCountries();
  const { mutate: createOrder } = useCreateOrder();

  const isLoading = isLoadingProducts || isLoadingCountries;

  const redirectToHome = () => {
    timerRef.current = setTimeout(() => {
      history.push(route.root);
      clearCart();
    }, 1500);
  };

  const handleRedirect = () => {
    if (timerRef.current) {
      history.push(route.root);
      clearCart();
      clearTimeout(timerRef.current);
    } else {
      history.goBack();
    }
  };
  const handleSubmit = values => {
    const dataToPersist = checkboxRef.current.checked ? values : null;
    setIsSubmitDisabled(true);

    createOrder(
      { payload: values },
      {
        onSuccess: () => {
          setToLocalStorage(CHECKOUT_LOCAL_STORAGE_KEY, dataToPersist);
          redirectToHome();
        },
        onError: () => setIsSubmitDisabled(false),
      }
    );
  };
  if (isLoading) return <PageLoader />;
  if (isEmpty(cartItems)) return history.push(route.root);
  return (
    <NeetoUIForm
    formProps={{ noValidate: true }}
    formikProps={{
      initialValues: checkoutFormData || CHECKOUT_FORM_INITIAL_VALUES,
      validationSchema: CHECKOUT_FORM_VALIDATION_SCHEMA,
      onSubmit: handleSubmit,
    }}
  >
    <div className="flex space-x-4">
      <div className="m-10 w-1/2">
        <div className="flex items-center">
          <LeftArrow
            className="hover:neeto-ui-bg-gray-400 neeto-ui-rounded-full mr-4"
            onClick={handleRedirect}
          />
          <Typography
            className="text-left"
            component="u"
            style="h3"
            textTransform="uppercase"
            weight="bold"
          >
            {t("checkout")}
          </Typography>
        </div>
        <div className="mt-8 space-y-4">
        <Form />
        <Checkbox
              defaultChecked
              label={t("saveInformationForNextTime")}
              ref={checkboxRef}
            />
        </div>
      </div>
      <div className="neeto-ui-bg-gray-300 h-screen w-1/2 pt-10">
      <Items {...{ isSubmitDisabled }} />
      </div>
    </div>
    </NeetoUIForm>
  );
};

export default withTitle(Checkout, i18n.t("checkout"));