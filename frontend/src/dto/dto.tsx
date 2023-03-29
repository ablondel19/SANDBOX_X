import {
  IsInt,
  IsString,
  IsDate,
} from 'class-validator';

export class MatchHistoryDto {
  @IsString()
  Winner: string;

  @IsString()
  Loser: string;

  @IsInt()
  scoreX: number;

  @IsInt()
  scoreY: number;

  @IsDate()
  date: Date;
}
