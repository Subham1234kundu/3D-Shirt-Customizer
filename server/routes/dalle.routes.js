import express from 'express';
import * as dotenv from 'dotenv';
import { OpenAI} from 'openai';

dotenv.config();

const router = express.Router();


const openai = new OpenAI({ apiKey: process.sk-proj-kUkulqO4ElOtCDmJ0ZzyT3BlbkFJ272MSfq6HNLFzXAO3Y7y });

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" })
})

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1024x1024",
      
    });

    const imageUrl = response.data[0].url;
    console.log('Generated image URL:', imageUrl);

    res.status(200).json({ photoUrl: imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" })
  }
})

export default router;