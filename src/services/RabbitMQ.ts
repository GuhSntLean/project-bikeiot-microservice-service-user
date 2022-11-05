import { Channel, connect, Connection, Message } from "amqplib";


class RabbitMQ {
  private conn: Connection;
  private channel: Channel;
  private uri: string;

  constructor(uri: string) {
    this.uri = uri;
  }
  
  async start(): Promise<void> {
    this.conn = await connect(this.uri);
    this.channel = await this.conn.createChannel();
  }

  async consume(queue: string, call: (message: Message) => void){
    
  }
}

export default RabbitMQ;
