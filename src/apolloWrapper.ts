import { ApolloClient, InMemoryCache } from '@apollo/client';

//Create an Apollo Client
const apolloClient = new ApolloClient({
    // "APOLLO_ENDPOINT_URL": "http://127.0.0.1:7071/api/graphql",
    uri: "http://127.0.0.1:7071/api/graphql",// process.env["APOLLO_ENDPOINT_URL"],
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
        },
        mutate: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all'
        }
    }
});

export async function sendQuery<TResponse>(query: any, variable: any): Promise<TResponse> {
    const response = await apolloClient.query({
        query: query,
        variables: variable,
    });

    if (response.error) {
        throw response.error
    }

    return response.data as TResponse;
}

export async function sendMutation<TResponse>(mutation: any, variable: any): Promise<TResponse> {
    const response = await apolloClient.mutate({
        mutation: mutation,
        variables: variable,
    });

    if (response.errors) {
        throw new Error("Mutation error: " + JSON.stringify(response.errors, null, 2))
    }

    return response.data as TResponse;
}

