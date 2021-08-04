import { Request, Response } from "express";
import { container } from "tsyringe";
import { ReportUseCase } from "./ReportUseCase";

import PdfPrinter from "pdfmake";
import { TDocumentDefinitions } from "pdfmake/interfaces";
import fs from "fs";

class ReportController {

 async handle(request: Request, response: Response): Promise<Response> {

  const reportUseCase = container.resolve(ReportUseCase)

  const ReportUser = await reportUseCase.execute()

  const fonts = {
   Courier: {
    normal: 'Courier',
    bold: 'Courier-Bold',
    italics: 'Courier-Oblique',
    bolditalics: 'Courier-BoldOblique'
   }
  }
  const printer = new PdfPrinter(fonts);

  const docDefinitions: TDocumentDefinitions = {
   defaultStyle: { font: "Courier" },
   content: [
    { text: "Meu Primeiro relatório" }
   ]

  }
  const pdfDoc = printer.createPdfKitDocument(docDefinitions)

  pdfDoc.pipe(fs.createWriteStream("reportUser.pdf"))

  pdfDoc.end()


  return response.send("Completed report")
 }


}

export { ReportController }