import React from 'react';
import {render, screen} from '@testing-library/react'
import Stops from './Stops'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import { QueryClient, QueryClientProvider } from "react-query";


const stopsURL = 'https://svc.metrotransit.org/nextripv2/stops/906/0'
const queryClient = new QueryClient() 

const nexTripResponse = rest.get(stopsURL, (req, resp, ctx) => {
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

describe("Stops", () =>{
    describe('with data', () => {
        it('displays stops', async () => {
            const route = 906
            const direction_id = 0
            render(<QueryClientProvider client={queryClient}><Stops route={route} direction_id={direction_id} /></QueryClientProvider>);
            const stop = await screen.findByText('MSP Airport Terminal 1 - Lindbergh Station')
            expect(stop).toBeTruthy()
        })
    })

    // describe('with error', () => {
    //     TODO.test('renders an error message')
    // })

    // describe('while loading', () => {
    //     TODO.test('renders loading message')
    // })
})
