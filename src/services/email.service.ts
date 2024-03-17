import axios from 'axios';
import { IEmail } from '../pages/types';

class EmailService{
    private URL = 'http://localhost:3000/'
    async getEmails(){
        const {data} = await axios.get<IEmail[]>(this.URL);
        return data

    }

    async sendEmail(text:string){
        const {data} = await axios.post(this.URL,{ 
            text,
        });
        return data
        
    }
}


export const emailService = new EmailService()