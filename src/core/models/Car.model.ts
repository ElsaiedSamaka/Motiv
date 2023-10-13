interface Car {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  car_img: string;
  brand: string;
  passengers: number;
  transmissions: "Automatic" | "Manual";
}
export default Car;
