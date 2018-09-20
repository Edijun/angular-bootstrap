export class Customer {
    public id: number;
    public custId: string;
    public salutation: string;
    public fullName: string;
    public motherName: string;
    public birthPlace: string;
    public birthDate: Date;
    public gender: string;
    public religion: string;
    public martialStatus: string;
    public numberDependent: number;
    public occupation: string;
    public subOccupation: string;
    public createdAt: Date;
    public createdBy: number;
    public updateAt: Date;
    public updateBy: number;

    constructor(
        id: number, custId: string, salutation: string, fullName: string, motherName: string, 
        birthPlace: string, birthDate: Date, gender: string, religion: string, martialStatus: string, 
        numberDependent: number, occupation: string, subOccupation: string, createdAt: Date, 
        createdBy: number, updateAt: Date, updateBy: number
    ) {

        this.id = id;
        this.custId = custId;
        this.salutation = salutation;
        this.fullName = fullName;
        this.motherName = motherName;
        this.birthPlace = birthPlace;
        this.birthDate = birthDate;
        this.gender = gender;
        this.religion = religion;
        this.martialStatus = martialStatus;
        this.numberDependent = numberDependent;
        this.occupation = occupation;
        this.subOccupation = subOccupation;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
        this.updateAt = updateAt;
        this.updateBy = updateBy;
    }
}