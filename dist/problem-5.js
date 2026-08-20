"use strict";
// Student Result Analyzer
Object.defineProperty(exports, "__esModule", { value: true });
const getStudentResult = (student) => {
    const marks = student.marks;
    const totalMarks = marks.reduce((acc, current) => acc + current, 0);
    const average = totalMarks / marks.length;
    const result = average >= 40 ? "Passed" : "Failed";
    return {
        name: student.name,
        average,
        result
    };
};
// console.log(getStudentResult({
//     name: "Rafi",
//     marks: [80, 75, 90, 85]
// }));
// console.log(getStudentResult({
//     name: "Nabil",
//     marks: [30, 35, 40, 25]
// }));
//# sourceMappingURL=problem-5.js.map