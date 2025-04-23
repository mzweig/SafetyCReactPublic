import { ParamListBase } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Instruct1: undefined;
  Instruct2: undefined;
  Instruct3: undefined;
  Instruct4: undefined;
  Button1: undefined;
  Button2: undefined;
  Button3: undefined;
  Button4: undefined;
  Button5: undefined;
  WhatIsCCS: undefined;
  VoicesOnCCS: undefined;
  DangersOfCCS: undefined;
  CCSBenefits: undefined;
} & ParamListBase;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
} 