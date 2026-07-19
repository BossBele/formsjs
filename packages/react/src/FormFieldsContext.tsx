import { createContext, useContext } from 'react';
import type { ComponentType, ReactNode } from 'react';

export type ComponentsMap = Record<string, ComponentType<any>>;

const FormFieldsContext = createContext<ComponentsMap>({});

export interface FormFieldsProviderProps {
  components: ComponentsMap;
  children: ReactNode;
}

export function FormFieldsProvider({ components, children }: FormFieldsProviderProps) {
  return (
    <FormFieldsContext.Provider value={components}>
      {children}
    </FormFieldsContext.Provider>
  );
}

export function useFieldComponents(): ComponentsMap {
  return useContext(FormFieldsContext);
}
