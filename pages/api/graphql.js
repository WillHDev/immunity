import { ApolloServer, gql } from 'apollo-server-micro'



//query automatically a resolver function, then name of the resolver
//and what it returns 

const typeDefs = gql`
type Query {
    sayHello: String
}
` 

const resolvers = {
    Query: {
        sayHello: () => {
            return "Hello Level Up!";
        }
    }
}


//typeDefs: typeDefs
const apolloServer = new ApolloServer({ typeDefs, resolvers })


//turn off bodyparser for this route
export const config = {
    api: {
        bodyParser: false
    }
}


export default apolloServer.createHandler({ path: "/api/graphql" })

// 1st block defining the api queries available