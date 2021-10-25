import { NextPageContext } from "next";

class ExampleProps {
    example: Object
}

export async function getServerSideProps(context: NextPageContext) {
    const { query } = context;

    return {
        props: query
    }
}

export default function Example(props: ExampleProps) {
    console.log(props);
    return (
        <div>
            <p>Hello, Next.js with Nest.js!</p>
            <p>Example Data from Server Side: {props.example}</p>
        </div>
    )
}