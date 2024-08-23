export type Topic = {
    topic: string;
    content: string;
    title?: string;
    type: string;
    vocabulary: string;
    questions: string;
    about?: string
  }

export type TopicList = {
    topic: string,
    checked: boolean
}[]
  