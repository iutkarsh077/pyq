import { z } from "zod";

const NewPdfForm = z.object({
  pdfName: z.string(),

  university: z.string().min(4, {
    message: "University name is too small",
  }).max(60, {
    message: "University name is too big",
  }),

  subject: z.string().min(4, {
    message: "Subject name is too short",
  }).max(40, {
    message: "Subject name is too big",
  }),

  subjectCode: z.string().min(2, {
    message: "Subject code is too short",
  }).max(20, {
    message: "Subject code is too big",
  }),

  category: z.string().min(3, {
    message: "Category is too short",
  }).max(30, {
    message: "Category is too big",
  }),

  year: z.number(),

  semester: z.number().min(1, {
    message: "Semester field cannot be empty",
  }).max(10, {
    message: "Semester is too big",
  }),

  department: z.string().min(2, {
    message: "Department name is too short",
  }).max(50, {
    message: "Department name is too big",
  }),
});


export type PdfFormType = z.infer<typeof NewPdfForm>;
export default NewPdfForm;