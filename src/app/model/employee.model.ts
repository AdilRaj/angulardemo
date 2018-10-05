export class Employee {
  private _id: number;
  private _name: string;
  private _gender: string;
  private _email?: string;
  private _phoneNumber?: number;
  private _contactPreference: string;
  private _dateOfBirth: Date;
  private _department: string;
  private _isActive: boolean;
  private _photoPath?: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get phoneNumber(): number {
    return this._phoneNumber;
  }

  set phoneNumber(value: number) {
    this._phoneNumber = value;
  }

  get contactPreference(): string {
    return this._contactPreference;
  }

  set contactPreference(value: string) {
    this._contactPreference = value;
  }

  get dateOfBirth(): Date {
    return this._dateOfBirth;
  }

  set dateOfBirth(value: Date) {
    this._dateOfBirth = value;
  }

  get department(): string {
    return this._department;
  }

  set department(value: string) {
    this._department = value;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

  get photoPath(): string {
    return this._photoPath;
  }

  set photoPath(value: string) {
    this._photoPath = value;
  }
}
