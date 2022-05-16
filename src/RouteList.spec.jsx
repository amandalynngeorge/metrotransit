import React from 'react';
import {render, screen, userEvent} from '@testing-library/react'
import RouteList from './RouteList'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import { QueryClient, QueryClientProvider } from "react-query";

const routesURL = 'https://svc.metrotransit.org/nextripv2/routes'
const queryClient = new QueryClient() 

const nexTripResponse = rest.get(routesURL, (req, resp, ctx) => {
    return resp(ctx.json([
        {
            place_code:'HHTE', 
            description: 'MSP Airport Terminal 2 - Humphrey Station'
        }, {
            place_code:'LIND', 
            description: 'MSP Airport Terminal 1 - Lindbergh Station'
        }]))
        
});

const handlers = [nexTripResponse]
const server = new setupServer(...handlers)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close())

describe("RouteList", () =>{
    describe('with data', () => {
        it('displays routes selection box', async () => {

            render(<QueryClientProvider client={queryClient}><RouteList /></QueryClientProvider>);
            const route = await screen.findByText('Routes')
            expect(route).toBeTruthy()
        })
    })

    // describe('with error', () => {
    //     TODO.test('renders an error message')
    // })

    // describe('while loading', () => {
    //     TODO.test('renders loading message')
    // })
})
