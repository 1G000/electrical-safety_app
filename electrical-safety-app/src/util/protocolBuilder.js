import * as docx from "docx";
import saveAs from "save-as";
import store from "@/store";
import { computed } from "vue";
import { comission } from "@/data/comission";

const employeeName = computed(() => store.state.employeeName);
const selectedDepartament = computed(() => store.state.selectedDepartament);
const selectedProfession = computed(() => store.state.selectedProfession);
const selectedCategory = computed(() => store.state.selectedCategory);
const previousDate = computed(() => store.state.previousDate);
const reason = computed(() => store.state.reason);
const group = computed(() => store.state.group);
const previousGroup = computed(() => store.state.previousGroup);

const daysInYear = 365;

const options = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
};

export function getDate() {
  const date = new Date();
  return date.toLocaleString("ru", options);
}

export function getNextYearDate() {
  const date = new Date();
  date.setDate(date.getDate() + daysInYear);
  return date.toLocaleString("ru", options);
}

const currentDate = getDate();
const nextTimeDate = getNextYearDate();

// eslint-disable-next-line max-lines-per-function
export default function generateProtocol() {
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
          new docx.Paragraph({
            alignment: "center",
            heading: "Heading2",
            children: [
              new docx.TextRun({
                text: `Проверки знаний правил работы`,
                color: "000000",
                bold: true,
              }),
            ],
          }),
          new docx.Paragraph({
            alignment: "center",
            heading: "Heading2",
            children: [
              new docx.TextRun({
                text: `В электроустановках`,
                color: "000000",
                bold: true,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Дата проверки: ${currentDate}`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Причина проверки: ${reason.value}`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Комиссия в составе:`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `${comission[0].role}: ${comission[0].jobTitle} ${comission[0].name}`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `${comission[1].role}: ${comission[1].jobTitle} ${comission[1].name}`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `${comission[2].role}: ${comission[2].jobTitle} ${comission[2].name}`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `${comission[3].role}: ${comission[3].jobTitle} ${comission[3].name}`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 150,
              after: 150,
            },
            children: [
              new docx.TextRun({
                text: `Провела проверку знаний ПУЭ, ПОТЭУ, ПТЭЭП и других нормативных документов в соответствии с занимаемой должностью.`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 150,
              after: 150,
            },
            heading: "Heading3",
            children: [
              new docx.TextRun({
                text: "Проверяемый",
                color: "000000",
                bold: true,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Фамилия, имя, отчество: ${employeeName.value}`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Место работы: Горный университет`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Должность: ${selectedProfession.value}`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text:
                  reason.value == "Первичная"
                    ? `Дата предыдущей проверки: -`
                    : `Дата предыдущей проверки: ${previousDate.value}`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text:
                  reason.value !== "Первичная"
                    ? `Оценка, группа по электробезопасности: удовлетворительно, ${previousGroup.value} до 1000В`
                    : `Оценка, группа по электробезопасности: -`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 150,
              after: 150,
            },
            heading: "Heading3",
            children: [
              new docx.TextRun({
                text: `Результаты проверки знаний`,
                color: "000000",
                bold: true,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `По устройству энергоустановок и технической эксплуатации: удовлетворительно`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `По охране труда: удовлетворительно`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `По пожарной безопасности: удовлетворительно`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Других правил и инструкций: удовлетворительно`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 150,
              after: 150,
            },
            heading: "Heading3",
            children: [
              new docx.TextRun({
                text: `Заключение комиссии`,
                color: "000000",
                bold: true,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Общая оценка: удовлетворительно`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Группа по электробезопасности: ${group.value} до 1000В`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Продолжительность дублирования: -`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Допущен к работе в качестве: ${selectedCategory.value} персонал`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Дата следующей проверки: ${nextTimeDate}`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 150,
              after: 150,
            },
            heading: "Heading3",
            children: [
              new docx.TextRun({
                text: `Подписи`,
                color: "000000",
                bold: true,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 300,
              after: 300,
            },
            children: [
              new docx.TextRun({
                text: `${comission[0].role}:                      ________________ /${comission[0].shortName}/`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 300,
              after: 300,
            },
            children: [
              new docx.TextRun({
                text: `${comission[1].role}: ________________ /${comission[1].shortName}/`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 300,
              after: 300,
            },
            children: [
              new docx.TextRun({
                text: `${comission[2].role}:                                     ________________ /${comission[2].shortName}/`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 300,
              after: 300,
            },
            children: [
              new docx.TextRun({
                text: `${comission[3].role}:                                     ________________ /${comission[3].shortName}/`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 300,
            },
            children: [
              new docx.TextRun({
                text: `С заключением комиссии ознакомлен: ____________________/__________________/`,
                size: 24,
              }),
            ],
          }),
        ],
      },
    ],
  });

  docx.Packer.toBlob(doc).then((blob) => {
    saveAs(blob, `${selectedDepartament.value}_${employeeName.value}.docx`);
  });
}
