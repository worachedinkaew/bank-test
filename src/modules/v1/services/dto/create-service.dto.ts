export class CreateServiceDto {
  _id: number;
  name: string;
  price: string;
  picture: string;
  description: string;
}

export class BookingDto {
  serviceId: string;
  customerId: string;
}
