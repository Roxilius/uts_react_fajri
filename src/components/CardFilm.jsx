/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Pencil } from 'lucide-react';
import Button from './Button'
import { Heart } from 'lucide-react';
import { Trash } from 'lucide-react';
import { Info } from 'lucide-react';
import { useState } from 'react';
const CardFilm = ({film, onDelete, onEdit}) => {
    const [like, setLike] = useState(false);
    return ( 
        <figure key={film.id}  className="rounded-2xl border border-1 flex flex-col gap-2 items-center justify-between border-black/50 p-3">
            <img src={film.gambar} alt="" width={250} />
            <figcaption className='text-center flex flex-col gap-4'>
                <h1>{film.judul}</h1>
                <h1>{film.tahunRilis}</h1>
                <div className='flex gap-3 justify-center'>
                    <Button onClick={()=> setLike(!like)}>
                        <Heart color={like? 'red' : 'white'}/>
                    </Button>
                    <Button onClick={()=>onEdit(film)}>
                        <Pencil color='blue'/>
                    </Button>
                    <Button onClick={()=> onDelete(film)}>
                        <Trash color='red'/>
                    </Button>
                    <Button onClick={()=> alert(`Judul : ${film.judul}\nGendre : ${film.genre}\nDurasi : ${film.durasi}\nSinopsi : ${film.sinopsis}`)}>
                        <Info/>
                    </Button>
                </div>
            </figcaption>
        </figure>
    );
}
 
export default CardFilm;