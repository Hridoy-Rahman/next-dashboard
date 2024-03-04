import mongoose, { Connection } from "mongoose";

export const connectToDB = async() =>{
    const connection ={}
    try {
        if(connection.isConnected) return;
        const db = await mongoose.connect(process.env.MONGO);
        Connection.isConnected = db.connections[0].readyState;
      } catch (error) {
        throw new Error(error);
      }
}