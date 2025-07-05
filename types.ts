// types.ts
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// Mendefinisikan parameter untuk setiap halaman dalam stack navigator
export type RootStackParamList = {
  Onboarding: undefined;
  Verification: undefined;
  Otp: { phone: string };
};

// Mengekspor tipe props untuk setiap halaman
export type OnboardingScreenProps = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;
export type VerificationScreenProps = NativeStackScreenProps<RootStackParamList, 'Verification'>;
export type OtpScreenProps = NativeStackScreenProps<RootStackParamList, 'Otp'>;
