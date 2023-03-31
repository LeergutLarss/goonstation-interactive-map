#!/bin/bash
cd ~/ss13/goonstation-interactive-map/

mapName=()
directory=()

for d in ./*/
do 
    if [ "${d}" == "./Files/" ] || [ "${d}" == "./DMM-tools/" ] || [ "${d}" == "./Hub/" ] || [ "${d}" == "./Test/" ]
    then
        continue
    else
        
        d="${d%"${d##*[!/]}"}" # extglob-free multi-trailing-/ trim
        directory+=($d)
        d="${d##*/}"                  # remove everything before the last /
        d=${d:-/} 
        d=${d,}
        mapName+=($d)
    fi

done

cd ~/ss13/goonstation/

for d in ${mapName[@]}
do    
        i=0
        dmm-tools minimap ./maps/$d.dmm -o ~/ss13/goonstation-interactive-map/${directory[i]}/images/ --enable only-pipenet
        i=$i+1
done    