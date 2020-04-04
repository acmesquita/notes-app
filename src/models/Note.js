import crypto from 'crypto';

export default class Note {

  constructor(text) {
    this.id = crypto.randomBytes(4).toString('HEX')
    this.text = text
    this.createAt = new Date().toLocaleDateString()
  }

}