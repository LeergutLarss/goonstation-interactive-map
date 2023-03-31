#!/bin/bash
cd ~/ss13/goonstation-interactive-map/

# Gather maps to generate
mapName=()

for d in ./*/
do 
    if [ "${d}" == "./Files/" ] || [ "${d}" == "./DMM-tools/" ] || [ "${d}" == "./Hub/" ] || [ "${d}" == "./Test/" ]
    then
        continue
    else
        
        d="${d%"${d##*[!/]}"}" # extglob-free multi-trailing-/ trim
        d="${d##*/}"                  # remove everything before the last /
        d=${d:-/} 
        d=${d,}
        mapName+=($d)
    fi

done

# Generate map images
cd ~/ss13/goonstation/

for d in ${mapName[@]}
do    
        dmm-tools minimap ./maps/$d.dmm -o ~/ss13/goonstation-interactive-map/DMM-tools/Images --enable only-pipenet
done    

# Rename map images
cd ~/ss13/goonstation-interactive-map/DMM-tools/Images

for images in ./*.png; do
    mv "$images" "${images%-1.png}-pipe.png"
done
