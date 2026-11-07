import clockart from './clockart.png'
import combo from './combo.png'
import cosmic from './cosmic.png'
import devotional from './devotional.png'
import digitalart from './digitalart.png'
import acrylicNeonNameBoard from './AcrylicNeonNameBoard.png'
import engagementFrame from './engagement-frame.png'
import family from './family.png'
import familycombo from './familycombo.png'
import lyrics from './lyrics.png'
import pencilSketch from './penilsketch.png'
import recreation from './recreation.png'
import restoring from './restoring.png'
import sketch from './sketch.png'
import slider1 from './slider1.png'
import vectorArt from './vectororart.png'

export const categories = [
  'Cosmic Frames','Personalized Art','Family & Memories','Devotional Frames',
  'Music & QR Frames','3D & Illusion Frames','Wall Clocks','Name Boards & Neon','Resin Arts'
]

export const localImages = {
  acrylicNeonNameBoard, clockart, combo, cosmic, devotional, digitalart, engagementFrame, family, familycombo, lyrics,
  pencilSketch, recreation, restoring, sketch, slider1, vectorArt
}

export const products = [
  {id:'MF001',name:'Cosmic Light Photo Frame',category:'Cosmic Frames',price:1499,size:'12 × 15 inch',tag:'Signature collection',image:cosmic,desc:'A striking illuminated frame designed to make your favourite memory stand out.'},
  {id:'MF002',name:'3D Shadow Box Frame',category:'3D & Illusion Frames',price:799,size:'12 × 15 inch',tag:'Starting at',image:combo,desc:'Layered depth and handcrafted details for a memorable display.'},
  {id:'MF003',name:'Personalized Family Portrait',category:'Family & Memories',price:1299,size:'12 × 18 inch',tag:'Customer favourite',image:family,desc:'Bring separate family photographs together in one beautiful composition.'},
  {id:'MF004',name:'Devotional 3D Frame',category:'Devotional Frames',price:899,size:'12 × 15 inch',tag:'Devotional collection',image:devotional,desc:'A premium devotional display for your home and prayer space.'},
  {id:'MF005',name:'Spotify Song Lyrics Frame',category:'Music & QR Frames',price:1499,size:'15 × 12 inch',tag:'Scan to play',image:lyrics,desc:'A personalized music-inspired frame with a scannable song code.'},
  {id:'MF006',name:'Photo Restoration Artwork',category:'Family & Memories',price:999,size:'Custom size',tag:'Preserve old memories',image:restoring,desc:'Restore faded or damaged photographs and preserve meaningful memories.'},
  {id:'MF007',name:'Pencil Sketch Portrait',category:'Personalized Art',price:799,size:'12 × 15 inch',tag:'Made from your photo',image:sketch,desc:'A timeless hand-drawn style portrait created from your reference photo.'},
  {id:'MF008',name:'Acrylic Neon Name Board',category:'Name Boards & Neon',price:1999,size:'Custom size',tag:'Made to order',image:acrylicNeonNameBoard,desc:'Custom acrylic and neon signage for homes, shops and businesses.'},
  {id:'MF009',name:'Personalized Photo Clock',category:'Wall Clocks',price:1199,size:'Custom size',tag:'Personalized decor',image:clockart,desc:'A functional wall clock with your favourite photos and design.'},
  {id:'MF010',name:'Resin Art Frame',category:'Resin Arts',price:1599,size:'Custom size',tag:'Artisan finish',image:'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5',desc:'Decorative resin artwork with a distinctive glossy finish.'},
  {id:'MF011',name:'Ultra Slim Acrylic Frame',category:'Personalized Art',price:999,size:'12 × 18 inch',tag:'Minimal premium',image:'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342',desc:'A clean, elegant acrylic frame for modern interiors.'},
  {id:'MF012',name:'Family Generations Frame',category:'Family & Memories',price:1499,size:'Custom size',tag:'Meaningful gift',image:familycombo,desc:'Celebrate generations with a thoughtfully composed family design.'}
]

export const money = n => `₹${Number(n).toLocaleString('en-IN')}`
