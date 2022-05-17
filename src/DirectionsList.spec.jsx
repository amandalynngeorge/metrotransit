import React from 'react';
import {render, screen} from '@testing-library/react'
import DirectionsList from './DirectionsList'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import { QueryClient, QueryClientProvider } from "react-query";


const directionsURL = 'https://svc.metrotransit.org/nextripv2/directions/906'
const queryClient = new QueryClient() 

const nexTripResponse = rest.get(directionsURL, (req, resp, ctx) => {
    return resp(ctx.json([
        {
            direction_id: 0, 
            direction_name: 'Northbound'
        }, {
            direction_id: 1, 
            direction_name: 'Southbound'
        }]))
        
});

const handlers = [nexTripResponse]
const server = new setupServer(...handlers)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close())

describe("DirectionsList", () =>{
    describe('with data', () => {
        it('displays Direction selection box', async () => {

            const route = 906
            render(<QueryClientProvider client={queryClient}><DirectionsList route={route} /></QueryClientProvider>);
            expect(await screen.findByText('Direction')).toBeTruthy()
        })
    })

    // describe('with error', () => {
    //     TODO.test('renders an error message')
    // })

    // describe('while loading', () => {
    //     TODO.test('renders loading message')
    // })
})
