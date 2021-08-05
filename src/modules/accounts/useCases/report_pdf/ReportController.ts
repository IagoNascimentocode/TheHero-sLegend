import { Request, Response } from "express";
import { container } from "tsyringe";
import { ReportUseCase } from "./ReportUseCase";

import PdfPrinter from "pdfmake";
import { TDocumentDefinitions } from "pdfmake/interfaces";
import fs from "fs";
import { Table } from "typeorm";

class ReportController {

      async handle(request: Request, response: Response) {

            const reportUseCase = container.resolve(ReportUseCase)

            const reportUser = await reportUseCase.execute()

            const bodyUser = []
            reportUser.forEach((user) => {
                  const rows = []

                  rows.push(user.id)
                  rows.push(user.name)
                  rows.push(user.email)
                  rows.push(user.nationality)
                  rows.push(user.city)
                  rows.push(user.address)
                  rows.push(user.admin)

                  bodyUser.push(rows)
            })
            const bodyChests = []
            reportUser.forEach((user) => {
                  const rows = []

                  rows.push(user.chests.id)
                  rows.push(user.name)
                  rows.push(user.chests.armor_id)
                  rows.push(user.chests.sword_id)
                  rows.push(user.chests.wallet)

                  bodyChests.push(rows)
            })
            const bodyHero = []
            reportUser.forEach((user) => {
                  const rows = []

                  user.hero.forEach((hero) => {
                        rows.push(hero.id)
                        rows.push(hero.type)
                        rows.push(hero.name)
                        rows.push(hero.life)
                        rows.push(hero.strength)
                        rows.push(hero.agility)
                        rows.push(hero.armor)
                        rows.push(hero.intelligence)
                        rows.push(hero.movementSpeed)
                        rows.push(hero.cash)
                  })

                  bodyHero.push(rows)
            })

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
                  pageMargins: [30, 30, 30, 30],
                  pageOrientation: 'landscape',
                  defaultStyle: { font: 'Courier' },
                  content: [
                        { text: 'This is an example report of the heroes and bau user entities\n\n\n\n\n', style: 'information' },
                        { text: 'Users :\n\n', style: 'header' },
                        {

                              table: {
                                    widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                                    body: [[{ text: 'ID', style: 'textHeaderTable' },
                                    { text: 'NAME', style: 'textHeaderTable' },
                                    { text: 'EMAIL', style: 'textHeaderTable' },
                                    { text: 'NATIONALITY', style: 'textHeaderTable' },
                                    { text: 'CITY', style: 'textHeaderTable' },
                                    { text: 'ADDRESS', style: 'textHeaderTable' },
                                    { text: 'ADM', style: 'textHeaderTable' }],
                                    ...bodyUser]
                              },
                              style: 'tableUsers',
                        },

                        { text: '\n\nHero : \n\n', style: 'header' },
                        {
                              table: {
                                    widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                                    body: [[{ text: 'ID', style: 'textHeaderTable' },
                                    { text: 'TYPE', style: 'textHeaderTable' },
                                    { text: 'NAME', style: 'textHeaderTable' },
                                    { text: 'LIFE', style: 'textHeaderTable' },
                                    { text: 'STRENGHT', style: 'textHeaderTable' },
                                    { text: 'AGILITY', style: 'textHeaderTable' },
                                    { text: 'ARMO', style: 'textHeaderTable' },
                                    { text: 'INTELLIGENCE', style: 'textHeaderTable' },
                                    { text: 'MOVEMENT SPEED', style: 'textHeaderTable' },
                                    { text: 'CASH', style: 'textHeaderTable' }
                                    ], ...bodyHero]
                              },
                              style: 'tableHero'
                        },

                        { text: '\n\nChests : \n\n', style: 'header' },
                        {
                              table: {
                                    widths: ['auto', 'auto', 'auto', 'auto', 'auto'],
                                    body: [[{ text: 'ID', style: 'textHeaderTable' },
                                    { text: 'USER NAME', style: 'textHeaderTable' },
                                    { text: 'ARMOR_ID', style: 'textHeaderTable' },
                                    { text: 'SWORD_ID', style: 'textHeaderTable' },
                                    { text: 'WALLET', style: 'textHeaderTable' }
                                    ], ...bodyChests]
                              },
                              style: 'tableChests',
                        }

                  ],
                  styles: {
                        header: { fontSize: 20, bold: true, },
                        tableUsers: { fillColor: 'black', fillOpacity: 0.2, alignment: 'center' },
                        tableChests: { fillColor: 'green', fillOpacity: 0.2, alignment: 'center' },
                        tableHero: { fillColor: 'blue', fillOpacity: 0.2, alignment: 'center' },
                        textHeaderTable: { fontSize: 12, bold: true, alignment: 'center', color: 'white', fillColor: 'black', fillOpacity: 0.8 },
                        information: { fontSize: 20, alignment: 'center' }
                  }
            }
            const pdfDoc = printer.createPdfKitDocument(docDefinitions)
            /* With this command line you create a .pdf document in the project ===> pdfDoc.pipe(fs.createWriteStream("reportAllEntities.pdf"))*/

            const chunks = []
            pdfDoc.on("data", (chunk) => {
                  chunks.push(chunk)
            })
            pdfDoc.end()

            pdfDoc.on("end", () => {
                  const result = Buffer.concat(chunks)
                  response.end(result)
            })
      }


}

export { ReportController }