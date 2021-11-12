export interface PasswordCheckerInfoModel {
  lowercase: boolean;
  uppercase: boolean;
  specialCharacter: boolean;
  minLenght: boolean;
  digit: boolean;
  point: number;
}

export enum DeviceNames {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  LAPTOP = 'laptop',
  DESKTOP = 'desktop',
}

export interface AuthDataPayloadModel {
  type: string;
  loginMethod: 'EMAIL' | 'SMS';
  token: string;
  expiresIn: number;
  refreshToken: string;
}
