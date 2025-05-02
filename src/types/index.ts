export interface PaperDataTypes {
    id: string;
    pdfName: string;
    university: string;
    subject: string;
    subjectCode: string;
    category: string;
    year: number;
    semester: number;
    department: string;
    createdAt?: Date;
    updatedAt?: Date;
}