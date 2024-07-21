import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AgentAssignmentTitle } from "../agentAssignment/AgentAssignmentTitle";

export const PropertyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="status" source="status" />
        <TextInput label="address" source="address" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="rooms" source="rooms" />
        <TextInput label="type" source="typeField" />
        <NumberInput step={1} label="size" source="size" />
        <ReferenceArrayInput
          source="agentAssignments"
          reference="AgentAssignment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AgentAssignmentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
