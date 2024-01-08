/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateControlObject: OnCreateControlObjectSubscription;
  onUpdateControlObject: OnUpdateControlObjectSubscription;
  onDeleteControlObject: OnDeleteControlObjectSubscription;
  onCreateControlObjectLabel: OnCreateControlObjectLabelSubscription;
  onUpdateControlObjectLabel: OnUpdateControlObjectLabelSubscription;
  onDeleteControlObjectLabel: OnDeleteControlObjectLabelSubscription;
};

export type CreateControlObjectInput = {
  tenantId: string;
  code: string;
  description: string;
  image?: string | null;
  labels?: Array<string | null> | null;
};

export type ControlObject = {
  __typename: "ControlObject";
  tenantId: string;
  code: string;
  description: string;
  fields?: Array<ControlObjectField | null> | null;
  image?: string | null;
  labels?: Array<string | null> | null;
};

export type ControlObjectField = {
  __typename: "ControlObjectField";
  code: string;
  description: string;
  key: boolean;
  type: string;
};

export type UpdateControlObjectInput = {
  tenantId: string;
  code: string;
  description?: string | null;
  fields?: Array<UpdateControlObjectFieldInput | null> | null;
  image?: string | null;
  labels?: Array<string | null> | null;
};

export type UpdateControlObjectFieldInput = {
  code: string;
  description?: string | null;
  key?: boolean | null;
  type?: string | null;
};

export type DeleteControlObjectInput = {
  tenantId: string;
  code: string;
};

export type CreateControlObjectLabelInput = {
  tenantId: string;
  code: string;
  description: string;
  color?: string | null;
};

export type ControlObjectLabel = {
  __typename: "ControlObjectLabel";
  tenantId: string;
  code: string;
  description: string;
  color?: string | null;
};

export type UpdateControlObjectLabelInput = {
  tenantId: string;
  code: string;
  description?: string | null;
  color?: string | null;
};

export type DeleteControlObjectLabelInput = {
  tenantId: string;
  code: string;
};

export type TableTenantFilterInput = {
  tenantId: TableStringFilterInput;
};

export type TableStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ControlObjectConnection = {
  __typename: "ControlObjectConnection";
  items?: Array<ControlObject | null> | null;
  nextToken?: string | null;
};

export type ControlObjectLabelConnection = {
  __typename: "ControlObjectLabelConnection";
  items?: Array<ControlObjectLabel | null> | null;
  nextToken?: string | null;
};

export type CreateControlObjectMutation = {
  __typename: "ControlObject";
  tenantId: string;
  code: string;
  description: string;
  fields?: Array<{
    __typename: "ControlObjectField";
    code: string;
    description: string;
    key: boolean;
    type: string;
  } | null> | null;
  image?: string | null;
  labels?: Array<string | null> | null;
};

export type UpdateControlObjectMutation = {
  __typename: "ControlObject";
  tenantId: string;
  code: string;
  description: string;
  fields?: Array<{
    __typename: "ControlObjectField";
    code: string;
    description: string;
    key: boolean;
    type: string;
  } | null> | null;
  image?: string | null;
  labels?: Array<string | null> | null;
};

export type DeleteControlObjectMutation = {
  __typename: "ControlObject";
  tenantId: string;
  code: string;
  description: string;
  fields?: Array<{
    __typename: "ControlObjectField";
    code: string;
    description: string;
    key: boolean;
    type: string;
  } | null> | null;
  image?: string | null;
  labels?: Array<string | null> | null;
};

export type CreateControlObjectLabelMutation = {
  __typename: "ControlObjectLabel";
  tenantId: string;
  code: string;
  description: string;
  color?: string | null;
};

export type UpdateControlObjectLabelMutation = {
  __typename: "ControlObjectLabel";
  tenantId: string;
  code: string;
  description: string;
  color?: string | null;
};

export type DeleteControlObjectLabelMutation = {
  __typename: "ControlObjectLabel";
  tenantId: string;
  code: string;
  description: string;
  color?: string | null;
};

export type GetControlObjectQuery = {
  __typename: "ControlObject";
  tenantId: string;
  code: string;
  description: string;
  fields?: Array<{
    __typename: "ControlObjectField";
    code: string;
    description: string;
    key: boolean;
    type: string;
  } | null> | null;
  image?: string | null;
  labels?: Array<string | null> | null;
};

export type GetControlObjectLabelQuery = {
  __typename: "ControlObjectLabel";
  tenantId: string;
  code: string;
  description: string;
  color?: string | null;
};

export type ListControlObjectsQuery = {
  __typename: "ControlObjectConnection";
  items?: Array<{
    __typename: "ControlObject";
    tenantId: string;
    code: string;
    description: string;
    fields?: Array<{
      __typename: "ControlObjectField";
      code: string;
      description: string;
      key: boolean;
      type: string;
    } | null> | null;
    image?: string | null;
    labels?: Array<string | null> | null;
  } | null> | null;
  nextToken?: string | null;
};

export type ListControlObjectLabelQuery = {
  __typename: "ControlObjectLabelConnection";
  items?: Array<{
    __typename: "ControlObjectLabel";
    tenantId: string;
    code: string;
    description: string;
    color?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateControlObjectSubscription = {
  __typename: "ControlObject";
  tenantId: string;
  code: string;
  description: string;
  fields?: Array<{
    __typename: "ControlObjectField";
    code: string;
    description: string;
    key: boolean;
    type: string;
  } | null> | null;
  image?: string | null;
  labels?: Array<string | null> | null;
};

export type OnUpdateControlObjectSubscription = {
  __typename: "ControlObject";
  tenantId: string;
  code: string;
  description: string;
  fields?: Array<{
    __typename: "ControlObjectField";
    code: string;
    description: string;
    key: boolean;
    type: string;
  } | null> | null;
  image?: string | null;
  labels?: Array<string | null> | null;
};

export type OnDeleteControlObjectSubscription = {
  __typename: "ControlObject";
  tenantId: string;
  code: string;
  description: string;
  fields?: Array<{
    __typename: "ControlObjectField";
    code: string;
    description: string;
    key: boolean;
    type: string;
  } | null> | null;
  image?: string | null;
  labels?: Array<string | null> | null;
};

export type OnCreateControlObjectLabelSubscription = {
  __typename: "ControlObjectLabel";
  tenantId: string;
  code: string;
  description: string;
  color?: string | null;
};

export type OnUpdateControlObjectLabelSubscription = {
  __typename: "ControlObjectLabel";
  tenantId: string;
  code: string;
  description: string;
  color?: string | null;
};

export type OnDeleteControlObjectLabelSubscription = {
  __typename: "ControlObjectLabel";
  tenantId: string;
  code: string;
  description: string;
  color?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateControlObject(
    input: CreateControlObjectInput
  ): Promise<CreateControlObjectMutation> {
    const statement = `mutation CreateControlObject($input: CreateControlObjectInput!) {
        createControlObject(input: $input) {
          __typename
          tenantId
          code
          description
          fields {
            __typename
            code
            description
            key
            type
          }
          image
          labels
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateControlObjectMutation>response.data.createControlObject;
  }
  async UpdateControlObject(
    input: UpdateControlObjectInput
  ): Promise<UpdateControlObjectMutation> {
    const statement = `mutation UpdateControlObject($input: UpdateControlObjectInput!) {
        updateControlObject(input: $input) {
          __typename
          tenantId
          code
          description
          fields {
            __typename
            code
            description
            key
            type
          }
          image
          labels
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateControlObjectMutation>response.data.updateControlObject;
  }
  async DeleteControlObject(
    input: DeleteControlObjectInput
  ): Promise<DeleteControlObjectMutation> {
    const statement = `mutation DeleteControlObject($input: DeleteControlObjectInput!) {
        deleteControlObject(input: $input) {
          __typename
          tenantId
          code
          description
          fields {
            __typename
            code
            description
            key
            type
          }
          image
          labels
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteControlObjectMutation>response.data.deleteControlObject;
  }
  async CreateControlObjectLabel(
    input: CreateControlObjectLabelInput
  ): Promise<CreateControlObjectLabelMutation> {
    const statement = `mutation CreateControlObjectLabel($input: CreateControlObjectLabelInput!) {
        createControlObjectLabel(input: $input) {
          __typename
          tenantId
          code
          description
          color
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateControlObjectLabelMutation>(
      response.data.createControlObjectLabel
    );
  }
  async UpdateControlObjectLabel(
    input: UpdateControlObjectLabelInput
  ): Promise<UpdateControlObjectLabelMutation> {
    const statement = `mutation UpdateControlObjectLabel($input: UpdateControlObjectLabelInput!) {
        updateControlObjectLabel(input: $input) {
          __typename
          tenantId
          code
          description
          color
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateControlObjectLabelMutation>(
      response.data.updateControlObjectLabel
    );
  }
  async DeleteControlObjectLabel(
    input: DeleteControlObjectLabelInput
  ): Promise<DeleteControlObjectLabelMutation> {
    const statement = `mutation DeleteControlObjectLabel($input: DeleteControlObjectLabelInput!) {
        deleteControlObjectLabel(input: $input) {
          __typename
          tenantId
          code
          description
          color
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteControlObjectLabelMutation>(
      response.data.deleteControlObjectLabel
    );
  }
  async GetControlObject(
    tenantId: string,
    code: string
  ): Promise<GetControlObjectQuery> {
    const statement = `query GetControlObject($tenantId: String!, $code: String!) {
        getControlObject(tenantId: $tenantId, code: $code) {
          __typename
          tenantId
          code
          description
          fields {
            __typename
            code
            description
            key
            type
          }
          image
          labels
        }
      }`;
    const gqlAPIServiceArguments: any = {
      tenantId,
      code
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetControlObjectQuery>response.data.getControlObject;
  }
  async GetControlObjectLabel(
    tenantId: string,
    code: string
  ): Promise<GetControlObjectLabelQuery> {
    const statement = `query GetControlObjectLabel($tenantId: String!, $code: String!) {
        getControlObjectLabel(tenantId: $tenantId, code: $code) {
          __typename
          tenantId
          code
          description
          color
        }
      }`;
    const gqlAPIServiceArguments: any = {
      tenantId,
      code
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetControlObjectLabelQuery>response.data.getControlObjectLabel;
  }
  async ListControlObjects(
    filter?: TableTenantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListControlObjectsQuery> {
    const statement = `query ListControlObjects($filter: TableTenantFilterInput, $limit: Int, $nextToken: String) {
        listControlObjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            tenantId
            code
            description
            fields {
              __typename
              code
              description
              key
              type
            }
            image
            labels
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListControlObjectsQuery>response.data.listControlObjects;
  }
  async ListControlObjectLabel(
    filter?: TableTenantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListControlObjectLabelQuery> {
    const statement = `query ListControlObjectLabel($filter: TableTenantFilterInput, $limit: Int, $nextToken: String) {
        listControlObjectLabel(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            tenantId
            code
            description
            color
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListControlObjectLabelQuery>response.data.listControlObjectLabel;
  }
  OnCreateControlObjectListener(
    tenantId?: string,
    code?: string,
    description?: string,
    image?: string,
    label?: Array<string | null>
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateControlObject">>
  > {
    const statement = `subscription OnCreateControlObject($tenantId: String, $code: String, $description: String, $image: String, $label: [String]) {
        onCreateControlObject(
          tenantId: $tenantId
          code: $code
          description: $description
          image: $image
          label: $label
        ) {
          __typename
          tenantId
          code
          description
          fields {
            __typename
            code
            description
            key
            type
          }
          image
          labels
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (tenantId) {
      gqlAPIServiceArguments.tenantId = tenantId;
    }
    if (code) {
      gqlAPIServiceArguments.code = code;
    }
    if (description) {
      gqlAPIServiceArguments.description = description;
    }
    if (image) {
      gqlAPIServiceArguments.image = image;
    }
    if (label) {
      gqlAPIServiceArguments.label = label;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as undefined as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateControlObject">
      >
    >;
  }

  OnUpdateControlObjectListener(
    tenantId?: string,
    code?: string,
    description?: string,
    image?: string,
    label?: Array<string | null>
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateControlObject">>
  > {
    const statement = `subscription OnUpdateControlObject($tenantId: String, $code: String, $description: String, $image: String, $label: [String]) {
        onUpdateControlObject(
          tenantId: $tenantId
          code: $code
          description: $description
          image: $image
          label: $label
        ) {
          __typename
          tenantId
          code
          description
          fields {
            __typename
            code
            description
            key
            type
          }
          image
          labels
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (tenantId) {
      gqlAPIServiceArguments.tenantId = tenantId;
    }
    if (code) {
      gqlAPIServiceArguments.code = code;
    }
    if (description) {
      gqlAPIServiceArguments.description = description;
    }
    if (image) {
      gqlAPIServiceArguments.image = image;
    }
    if (label) {
      gqlAPIServiceArguments.label = label;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as undefined as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateControlObject">
      >
    >;
  }

  OnDeleteControlObjectListener(
    tenantId?: string,
    code?: string,
    description?: string,
    image?: string,
    label?: Array<string | null>
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteControlObject">>
  > {
    const statement = `subscription OnDeleteControlObject($tenantId: String, $code: String, $description: String, $image: String, $label: [String]) {
        onDeleteControlObject(
          tenantId: $tenantId
          code: $code
          description: $description
          image: $image
          label: $label
        ) {
          __typename
          tenantId
          code
          description
          fields {
            __typename
            code
            description
            key
            type
          }
          image
          labels
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (tenantId) {
      gqlAPIServiceArguments.tenantId = tenantId;
    }
    if (code) {
      gqlAPIServiceArguments.code = code;
    }
    if (description) {
      gqlAPIServiceArguments.description = description;
    }
    if (image) {
      gqlAPIServiceArguments.image = image;
    }
    if (label) {
      gqlAPIServiceArguments.label = label;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as undefined as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteControlObject">
      >
    >;
  }

  OnCreateControlObjectLabelListener(
    tenantId?: string,
    code?: string,
    description?: string,
    color?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateControlObjectLabel">
    >
  > {
    const statement = `subscription OnCreateControlObjectLabel($tenantId: String, $code: String, $description: String, $color: String) {
        onCreateControlObjectLabel(
          tenantId: $tenantId
          code: $code
          description: $description
          color: $color
        ) {
          __typename
          tenantId
          code
          description
          color
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (tenantId) {
      gqlAPIServiceArguments.tenantId = tenantId;
    }
    if (code) {
      gqlAPIServiceArguments.code = code;
    }
    if (description) {
      gqlAPIServiceArguments.description = description;
    }
    if (color) {
      gqlAPIServiceArguments.color = color;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as undefined as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateControlObjectLabel">
      >
    >;
  }

  OnUpdateControlObjectLabelListener(
    tenantId?: string,
    code?: string,
    description?: string,
    color?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateControlObjectLabel">
    >
  > {
    const statement = `subscription OnUpdateControlObjectLabel($tenantId: String, $code: String, $description: String, $color: String) {
        onUpdateControlObjectLabel(
          tenantId: $tenantId
          code: $code
          description: $description
          color: $color
        ) {
          __typename
          tenantId
          code
          description
          color
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (tenantId) {
      gqlAPIServiceArguments.tenantId = tenantId;
    }
    if (code) {
      gqlAPIServiceArguments.code = code;
    }
    if (description) {
      gqlAPIServiceArguments.description = description;
    }
    if (color) {
      gqlAPIServiceArguments.color = color;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as undefined as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateControlObjectLabel">
      >
    >;
  }

  OnDeleteControlObjectLabelListener(
    tenantId?: string,
    code?: string,
    description?: string,
    color?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteControlObjectLabel">
    >
  > {
    const statement = `subscription OnDeleteControlObjectLabel($tenantId: String, $code: String, $description: String, $color: String) {
        onDeleteControlObjectLabel(
          tenantId: $tenantId
          code: $code
          description: $description
          color: $color
        ) {
          __typename
          tenantId
          code
          description
          color
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (tenantId) {
      gqlAPIServiceArguments.tenantId = tenantId;
    }
    if (code) {
      gqlAPIServiceArguments.code = code;
    }
    if (description) {
      gqlAPIServiceArguments.description = description;
    }
    if (color) {
      gqlAPIServiceArguments.color = color;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as undefined as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteControlObjectLabel">
      >
    >;
  }
}
