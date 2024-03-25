import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./card";


export default function IdeaCard({ idea }: { idea: {title: string, description: string} }) {
    return (
    <Card>
        <CardHeader>
            <CardTitle>{ idea.title }</CardTitle>
        </CardHeader>
        <CardContent>
            <p>{ idea.description }</p>
        </CardContent>
    </Card>
  );
}