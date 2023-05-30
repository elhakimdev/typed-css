type CSSPropsObject = {
  [PropsKey in keyof CSSStyleDeclaration]: PropsKey extends string ? CSSStyleDeclaration[PropsKey] : never
}
type ExtractCSSPropsKey<T extends object> = {
  [K in keyof T]: K extends string ? K : never;
}[keyof T];

type CSSGlobalPropsKey = ExtractCSSPropsKey<CSSPropsObject>;
type CSSProperties = Omit<{
  [CSSProps in CSSGlobalPropsKey]: string
}, "setProperty" | "removeProperty" | "item" | "getPropertyValue" | "getPropertyPriority">

export const CSSStyleSheet: Partial<CSSProperties> = {} as const;
