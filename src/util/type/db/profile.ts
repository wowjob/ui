export type TSimpleValue = string | number | boolean
export type TSimpleValueObject = Record<string, TSimpleValue>

export type TDBProfile = {
  created_by: string
  public: TSimpleValueObject
  private: TSimpleValueObject
  secret: TSimpleValueObject
  social: TSimpleValueObject
  password: TSimpleValueObject
}
