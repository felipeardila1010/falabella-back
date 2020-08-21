import {IsNotEmpty, IsString} from 'class-validator';

export class SaveDataDto {
    @IsNotEmpty()
    @IsString()
    rut: string;

    @IsNotEmpty()
    @IsString()
    cellphone: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    rent: string;
}
