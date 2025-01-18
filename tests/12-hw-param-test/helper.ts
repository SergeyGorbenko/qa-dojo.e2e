import * as fs from 'fs';
import csvParser from 'csv-parser';
import { Student } from './student';

export async function importFromCSV(filePath: string): Promise<Student[]> {
    const formDataList: Student[] = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on('data', (row) => {
                const subjects = row['Subjects'] ? row['Subjects'].split(';') : [];
                const hobbies = row['Hobbies'] ? row['Hobbies'].split(';') : [];
                const formData = new Student(
                    row['First Name'] || '',
                    row['Last Name'] || '',
                    row['Email'] || '',
                    row['Gender'] || '',
                    row['Mobile'] || '',
                    row['Date of Birth'] || '',
                    subjects,
                    hobbies,
                    row['Picture'] || '',
                    row['Current Address'] || '',
                    row['State and City'] || ''
                );
                formDataList.push(formData);
            })
            .on('end', () => resolve(formDataList))
            .on('error', (error) => reject(error));
    });
}