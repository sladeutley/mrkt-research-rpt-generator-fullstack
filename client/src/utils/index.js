import FileSaver from 'file-saver'; //I think this allows download capabilities
import { surpriseMePrompts } from '../constants'

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
  const randomPrompt = surpriseMePrompts[randomIndex]

  //so don't get same prompt a few times in a row
  if (randomPrompt === prompt) return getRandomPrompt(prompt)

  return randomPrompt
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`); //this implements function
}