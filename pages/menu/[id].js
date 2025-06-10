import { useRouter } from 'next/router'
import React from 'react'
import DetailsPage from '../../components/templates/DetailsPage';

function Details({data}) {
    const router = useRouter();

    if(router.isFallback){
        return <h2>Loading Page...</h2>
    }
  return (
    <div>
        <DetailsPage {...data} />
    </div>
  )
}

export default Details

export async function getStaticPaths() {
    const res = await fetch("http://localhost:4000/data")
    const json = await res.json()
    const data = json.slice(0, 10);

    const paths = data.map(food => ({params: {id: food.id.toString()}}))

    return {
        paths: paths,
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const {params} = context;
    const res = await fetch(`http://localhost:4000/data/${params.id}`);
    const data = await res.json()
    console.log(data)
    if(!data.id){
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data: data
        },
        revalidate: 10,
        
    }
}