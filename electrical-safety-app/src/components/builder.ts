import * as docx from "docx";
import saveAs from "save-as";

export default async function generateProtocol() {
  const doc = new docx.Document({
    sections: [
      {
        properties: {},
        children: [
          new docx.Paragraph({
            alignment: "center",
            heading: "Heading2",
            children: [
              new docx.TextRun({
                text: `Протокол №___________`,
                color: "000000",
                bold: true,
              }),
            ],
          }),
        ],
      },
    ],
  });
  docx.Packer.toBlob(doc).then((blob) => {
    saveAs(blob, `NewFile.docx`);
  });
}
