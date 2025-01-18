export class Student {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public gender: string,
        public mobile: string,
        public dateOfBirth: string,
        public subjects: string[],
        public hobbies: string[],
        public picture: string,
        public currentAddress: string,
        public stateAndCity: string
    ) {}
}