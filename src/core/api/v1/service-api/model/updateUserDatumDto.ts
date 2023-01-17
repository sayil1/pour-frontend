/**
 * Emploments Data
 * Employments Data
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface UpdateUserDatumDto { 
    title?: string;
    gender?: UpdateUserDatumDto.GenderEnum;
    name?: string;
    genotype?: string;
    bloodGroup?: string;
    maritalStatus?: UpdateUserDatumDto.MaritalStatusEnum;
    dateOfBirth?: string;
    placeOfBirth?: string;
    placeOfResidence?: string;
    speakerOfEnglish?: boolean;
    writingInEnglish?: boolean;
    levelOfEducation?: UpdateUserDatumDto.LevelOfEducationEnum;
    formOfEducation?: UpdateUserDatumDto.FormOfEducationEnum;
    skillSet?: string;
    interestHobbies?: string;
    nextOfKinFullName?: string;
    nextOfKinPhoneNumber?: string;
    emergencyContact?: string;
    address?: string;
    phoneNumber?: string;
    email?: string;
    idealEmployment?: string;
    economicOppurtunitiesAround?: string;
    employedBefore?: boolean;
    currentlyEmpoyed?: boolean;
    underEmpoyed?: boolean;
    userType?: UpdateUserDatumDto.UserTypeEnum;
    password?: string;
}
export namespace UpdateUserDatumDto {
    export type GenderEnum = 'Male' | 'Female' | 'Other';
    export const GenderEnum = {
        Male: 'Male' as GenderEnum,
        Female: 'Female' as GenderEnum,
        Other: 'Other' as GenderEnum
    };
    export type MaritalStatusEnum = 'married' | 'divorced' | 'seperated' | 'single' | 'widower';
    export const MaritalStatusEnum = {
        Married: 'married' as MaritalStatusEnum,
        Divorced: 'divorced' as MaritalStatusEnum,
        Seperated: 'seperated' as MaritalStatusEnum,
        Single: 'single' as MaritalStatusEnum,
        Widower: 'widower' as MaritalStatusEnum
    };
    export type LevelOfEducationEnum = 'primary' | 'tertiary' | 'others';
    export const LevelOfEducationEnum = {
        Primary: 'primary' as LevelOfEducationEnum,
        Tertiary: 'tertiary' as LevelOfEducationEnum,
        Others: 'others' as LevelOfEducationEnum
    };
    export type FormOfEducationEnum = 'normadic' | 'arabic' | 'regular';
    export const FormOfEducationEnum = {
        Normadic: 'normadic' as FormOfEducationEnum,
        Arabic: 'arabic' as FormOfEducationEnum,
        Regular: 'regular' as FormOfEducationEnum
    };
    export type UserTypeEnum = 'admin' | 'regular';
    export const UserTypeEnum = {
        Admin: 'admin' as UserTypeEnum,
        Regular: 'regular' as UserTypeEnum
    };
}


