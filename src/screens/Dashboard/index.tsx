import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import {
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from './styles';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard() {
    const data: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title: "Desenvolvimento de Site",
            amount: "R$ 12.000,00",
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: "03/05/2020"
        },
        {
            id: '2',
            type: 'negative',
            title: "Hope Burger",
            amount: "R$ 72.000,00",
            category: {
                name: 'Alimentação',
                icon: 'coffee'
            },
            date: "03/05/2020"
        },
        {
            id: '3',
            type: 'positive',
            title: "Desenvolvimento de App",
            amount: "R$ 5.000,00",
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: "03/05/2020"
        },
        {
            id: '4',
            type: 'negative',
            title: "Conta de luz",
            amount: "R$ 122.000,00",
            category: {
                name: 'Casa',
                icon: 'shopping-bag'
            },
            date: "03/05/2020"
        }
    ];

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{uri: 'https://avatars.githubusercontent.com/u/55638362?s=96&v=4'}}/>
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Marcos</UserName>
                        </User>
                    </UserInfo>

                    <Icon name="power"/>
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard 
                    title="Entradas"
                    amount="R$ 17.400,00"
                    lastTransaction="Ultima entrada no dia 13 de abril"
                    type="up"
                />
                <HighlightCard 
                    title="Saidas"
                    amount="R$ 7.400,00"
                    lastTransaction="Ultima saida no dia 13 de abril"
                    type="down"
                />
                <HighlightCard 
                    title="Total"
                    amount="R$ 37.400,00"
                    lastTransaction="Ultima saida no dia 13 de abril"
                    type="total"
                />
            </HighlightCards>

            <Transactions>
                <Title>
                    Listagem
                </Title>

                <TransactionList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TransactionCard data={item}/>
                    )}
                />
            </Transactions>
        </Container>
    )
}