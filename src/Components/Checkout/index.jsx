import i18n from "i18next";
import { LeftArrow } from "neetoicons";
import { Typography ,Checkbox,Button} from "neetoui";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import withTitle from "utils/withTitle";
import { PageLoader } from "../commons";
import { useFetchCountries , useCreateOrder} from "hooks/reactQuery/useCheckoutApi";

import { Form as NeetoUIForm } from "neetoui/formik";
import { useRef, useState } from "react";
import {
  CHECKOUT_FORM_INITIAL_VALUES, CHECKOUT_FORM_VALIDATION_SCHEMA,
} from "./constants";
import Form from "./Form";
import useCartItemsStore from "stores/useCartItemsStore";
import route from "routes";
const Checkout = () => {
  const timerRef = useRef(null);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const { t } = useTranslation();
  const { mutate: createOrder } = useCreateOrder();
  const history = useHistory();
  const { isLoading } = useFetchCountries();
  const clearCart = useCartItemsStore.pickFrom();

  const redirectToHome = () => {
    timerRef.current = setTimeout(() => {
      history.push(route.root);
      clearCart();
    }, 1500);
  };

  const handleRedirect = () => {
    if (timerRef.current) {
      history.push(routes.root);
      clearCart();
      clearTimeout(timerRef.current);
    } else {
      history.goBack();
    }
  };
  const handleSubmit = values => {
    setIsSubmitDisabled(true);

    createOrder(
      { payload: values },
      {
        onSuccess: () => {
          redirectToHome();
        },
        onError: () => setIsSubmitDisabled(false),
      }
    );
  };
  if (isLoading) return <PageLoader />;
  return (
    <NeetoUIForm
    formProps={{ noValidate: true }}
    formikProps={{
      initialValues: CHECKOUT_FORM_INITIAL_VALUES,
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
        </div>
      </div>
      <div className="neeto-ui-bg-gray-300 h-screen w-1/2 pt-10">
        {/* Items added to cart will be displayed here */}
        <div className="mt-auto flex justify-center">
            <Button
              className="bg-neutral-800 w-1/3 justify-center"
              disabled={isSubmitDisabled}
              label={t("confirmOrder")}
              type="submit"
            />
          </div>
      </div>
    </div>
    </NeetoUIForm>
  );
};

export default withTitle(Checkout, i18n.t("checkout"));