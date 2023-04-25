import React from 'react';
import styles from "./styles.module.scss";
import { Description } from '../../Description/Description';
import { Icon_with_Text } from '../../Icon_with_text/Icon';
import home_icon from "./../../../assets/images/home_icon.svg"
import rent_icon from "./../../../assets/images/rent_icon.svg";
import arrow_icon from "./../../../assets/images/areaGuideArrow.svg"

const City_Card = [
{
  id:1,
  city: "Islamabad",
  area_image:"https://www.graana.com/_next/image/?url=http%3A%2F%2Fres.cloudinary.com%2Fgraanacom%2Fimage%2Fupload%2Fv1538580064%2Fax22at6n4jzc01f27r3m.jpg&w=640&q=75",
  area_name: "F-17",
  properties_for_rent: 390,
  properties_for_sales: 590,
},
{
  id:2,
  city: "Islamabad",
  area_image:"https://www.graana.com/_next/image/?url=http%3A%2F%2Fres.cloudinary.com%2Fgraanacom%2Fimage%2Fupload%2Fv1538580064%2Fax22at6n4jzc01f27r3m.jpg&w=640&q=75",
  area_name: "F-17",
  properties_for_rent: 3950,
  properties_for_sales: 5590,
},
{
  id:3,
  city: "Islamabad",
  area_image:"https://www.graana.com/_next/image/?url=http%3A%2F%2Fres.cloudinary.com%2Fgraanacom%2Fimage%2Fupload%2Fv1538580064%2Fax22at6n4jzc01f27r3m.jpg&w=640&q=75",
  area_name: "F-17",
  properties_for_rent: 390,
  properties_for_sales: 5950,
},
{
  id:4,
  city: "Islamabad",
  area_image:"https://www.graana.com/_next/image/?url=http%3A%2F%2Fres.cloudinary.com%2Fgraanacom%2Fimage%2Fupload%2Fv1538580064%2Fax22at6n4jzc01f27r3m.jpg&w=640&q=75",
  area_name: "F-17",
  properties_for_rent: 39430,
  properties_for_sales: 594330,
},
{
  id:4,
  city: "Islamabad",
  area_image:"https://www.graana.com/_next/image/?url=http%3A%2F%2Fres.cloudinary.com%2Fgraanacom%2Fimage%2Fupload%2Fv1538580064%2Fax22at6n4jzc01f27r3m.jpg&w=640&q=75",
  area_name: "F-17",
  properties_for_rent: 39430,
  properties_for_sales: 5943301,
}
];

export const Citycard = () => {
  return (
    <div className={styles.city}>
      {City_Card.map(city => (
        <div key={city.id} className='card' >
          <img src={city.area_image} alt="city" />
          <Description text={city.area_name}/> 
          <div className={styles.rs_div}>
          <Icon_with_Text icon_image={home_icon} icon_text={city.properties_for_rent +" on Rent"}/>
          <Icon_with_Text icon_image={rent_icon} icon_text={city.properties_for_sales +" on Sale"}/>
         </div>
         <hr />
         <Icon_with_Text icon_image={arrow_icon} icon_text={"View Area Guide"}/>
        </div>
      ))}
    </div>
  )
};
