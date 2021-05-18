
import express from 'express';
import bodyParser from "body-parser";



import { makeExecutableSchema } from "graphql-tools"
import {graphqlExpress} from "apollo-server-express/dist/expressApollo";

const {ApolloServer, gql} = require('apollo-server');

//추후 데이터 베이스 자료로 변경
const books = [
    {title:"this is book", author:"이정훈"},
    {title:"82년생 김지영", author:"홍길동"},
    {title:"88만원 세대", author:"유시민"}
];

const typeDefs = gql` 
        type Book {
            title:String
            author:String
        }
        type Query {
            books : [Book]
        }
`;

const resolvers = {
    Query: {
        books: ()=> books,
    },
}

const schema = makeExecutableSchema({
    typeDefs,
    });


const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
