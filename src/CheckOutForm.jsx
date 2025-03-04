import "./CheckOutForm.css";
const countries = [
    { code: "AD", name: "Andorra" },
    { code: "AE", name: "United Arab Emirates" },
    { code: "AF", name: "Afghanistan" },
    { code: "AG", name: "Antigua and Barbuda" },
    { code: "AI", name: "Anguilla" },
    { code: "AL", name: "Albania" },
    { code: "AM", name: "Armenia" },
    { code: "AO", name: "Angola" },
    { code: "AQ", name: "Antarctica" },
    { code: "AR", name: "Argentina" },
    { code: "AS", name: "American Samoa" },
    { code: "AT", name: "Austria" },
    { code: "AU", name: "Australia" },
    { code: "AW", name: "Aruba" },
    { code: "AX", name: "Åland" },
    { code: "AZ", name: "Azerbaijan" },
    { code: "BA", name: "Bosnia and Herzegovina" },
    { code: "BB", name: "Barbados" },
    { code: "BD", name: "Bangladesh" },
    { code: "BE", name: "Belgium" },
    { code: "BF", name: "Burkina Faso" },
    { code: "BG", name: "Bulgaria" },
    { code: "BH", name: "Bahrain" },
    { code: "BI", name: "Burundi" },
    { code: "BJ", name: "Benin" },
    { code: "BL", name: "Saint Barthélemy" },
    { code: "BM", name: "Bermuda" },
    { code: "BN", name: "Brunei" },
    { code: "BO", name: "Bolivia" },
    { code: "BQ", name: "Bonaire" },
    { code: "BR", name: "Brazil" },
    { code: "BS", name: "Bahamas" },
    { code: "BT", name: "Bhutan" },
    { code: "BV", name: "Bouvet Island" },
    { code: "BW", name: "Botswana" },
    { code: "BY", name: "Belarus" },
    { code: "BZ", name: "Belize" },
    { code: "CA", name: "Canada" },
    { code: "CC", name: "Cocos [Keeling] Islands" },
    { code: "CD", name: "DR Congo" },
    { code: "CF", name: "Central African Republic" },
    { code: "CG", name: "Congo Republic" },
    { code: "CH", name: "Switzerland" },
    { code: "CI", name: "Ivory Coast" },
    { code: "CK", name: "Cook Islands" },
    { code: "CL", name: "Chile" },
    { code: "CM", name: "Cameroon" },
    { code: "CN", name: "China" },
    { code: "CO", name: "Colombia" },
    { code: "CR", name: "Costa Rica" },
    { code: "CU", name: "Cuba" },
    { code: "CV", name: "Cabo Verde" },
    { code: "CW", name: "Curaçao" },
    { code: "CX", name: "Christmas Island" },
    { code: "CY", name: "Cyprus" },
    { code: "CZ", name: "Czechia" },
    { code: "DE", name: "Germany" },
    { code: "DJ", name: "Djibouti" },
    { code: "DK", name: "Denmark" },
    { code: "DM", name: "Dominica" },
    { code: "DO", name: "Dominican Republic" },
    { code: "DZ", name: "Algeria" },
    { code: "EC", name: "Ecuador" },
    { code: "EE", name: "Estonia" },
    { code: "EG", name: "Egypt" },
    { code: "EH", name: "Western Sahara" },
    { code: "ER", name: "Eritrea" },
    { code: "ES", name: "Spain" },
    { code: "ET", name: "Ethiopia" },
    { code: "FI", name: "Finland" },
    { code: "FJ", name: "Fiji" },
    { code: "FK", name: "Falkland Islands" },
    { code: "FM", name: "Federated States of Micronesia" },
    { code: "FO", name: "Faroe Islands" },
    { code: "FR", name: "France" },
    { code: "GA", name: "Gabon" },
    { code: "GB", name: "United Kingdom" },
    { code: "GD", name: "Grenada" },
    { code: "GE", name: "Georgia" },
    { code: "GF", name: "French Guiana" },
    { code: "GG", name: "Guernsey" },
    { code: "GH", name: "Ghana" },
    { code: "GI", name: "Gibraltar" },
    { code: "GL", name: "Greenland" },
    { code: "GM", name: "Gambia" },
    { code: "GN", name: "Guinea" },
    { code: "GP", name: "Guadeloupe" },
    { code: "GQ", name: "Equatorial Guinea" },
    { code: "GR", name: "Greece" },
    { code: "GS", name: "South Georgia and the South Sandwich Islands" },
    { code: "GT", name: "Guatemala" },
    { code: "GU", name: "Guam" },
    { code: "GW", name: "Guinea-Bissau" },
    { code: "GY", name: "Guyana" },
    { code: "HK", name: "Hong Kong" },
    { code: "HN", name: "Honduras" },
    { code: "HR", name: "Croatia" },
    { code: "HT", name: "Haiti" },
    { code: "HU", name: "Hungary" },
    { code: "ID", name: "Indonesia" },
    { code: "IE", name: "Ireland" },
    { code: "IL", name: "Israel" },
    { code: "IM", name: "Isle of Man" },
    { code: "IN", name: "India" },
    { code: "IQ", name: "Iraq" },
    { code: "IR", name: "Iran" },
    { code: "IS", name: "Iceland" },
    { code: "IT", name: "Italy" },
    { code: "JE", name: "Jersey" },
    { code: "JM", name: "Jamaica" },
    { code: "JO", name: "Hashemite Kingdom of Jordan" },
    { code: "JP", name: "Japan" },
    { code: "KE", name: "Kenya" },
    { code: "KG", name: "Kyrgyzstan" },
    { code: "KH", name: "Cambodia" },
    { code: "KI", name: "Kiribati" },
    { code: "KM", name: "Comoros" },
    { code: "KN", name: "St Kitts and Nevis" },
  ];  

const CheckOutForm=()=>{

    return <div className="total">
    <div className="contact">
     <h2>Contact</h2>
      <div>
        <p><b>Email*</b></p>
     <input type="email" placeholder="Enter your Email" className="em"/>
      </div>
     <div>
       <h2>Shipping address</h2>
        <p><b>Country*</b></p>
        <form action="">
         <label> </label>
         <input list="cars"/>
         <datalist >
             {countries.map(count=><option value={count.name}/>)}
         </datalist>
     </form>
     </div>
     <div className="name">
       <div>
          <p><b>First name*</b></p>
       <input type="text"/>
       </div>
        <div>
          <p><b>Last name*</b></p>
       <input type="text"/>
        </div>
       </div>
        <div>
          <p><b>Address*</b></p>
       <input type="text"/>
        </div>
       <div>
           <p><b>Apartment*</b></p>
       <input type="text"/>
       </div>
       <div className="Location">
          <div>
             <p><b>City*</b></p>
       <input type="text"/>
          </div>
        <div>
             <p><b>State*</b></p>
       <input type="text"/>
          </div>
        <div>
             <p><b>Location*</b></p>
       <input type="text"/>
          </div>
       </div>
    </div>
 
    <div className="over view">
 
    </div>
 </div>
}
