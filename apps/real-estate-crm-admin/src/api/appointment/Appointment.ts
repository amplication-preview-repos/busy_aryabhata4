export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dateTime: Date | null;
  note: string | null;
};
