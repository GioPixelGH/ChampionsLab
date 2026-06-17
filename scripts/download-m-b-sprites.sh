#!/bin/bash
# Download sprites for M-B Pokémon and their Mega forms
SPRITE_DIR="public/sprites"
HOME_BASE="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home"

# Base Pokémon sprites (M-B Pokémon that are missing)
BASE_IDS=(45 211 254 257 260 303 398 518 545 560 604 668 687 689 691 870 904 972 979 1000)
echo "=== Downloading base sprites ==="
for id in "${BASE_IDS[@]}"; do
  if [ ! -f "${SPRITE_DIR}/${id}.png" ]; then
    echo "  Downloading ${id}.png..."
    curl -sL "${HOME_BASE}/${id}.png" -o "${SPRITE_DIR}/${id}.png"
    sleep 0.1
  else
    echo "  OK ${id}.png (already exists)"
  fi
done

# Mainline Mega sprites via PokeAPI form IDs
echo ""
echo "=== Downloading mainline Mega sprites ==="
declare -A MEGA_MAP
MEGA_MAP[10050]=10050  # Mega Blaziken
MEGA_MAP[10052]=10052  # Mega Mawile
MEGA_MAP[10064]=10064  # Mega Swampert
MEGA_MAP[10065]=10065  # Mega Sceptile
for filename in "${!MEGA_MAP[@]}"; do
  form_id=${MEGA_MAP[$filename]}
  if [ ! -f "${SPRITE_DIR}/${filename}.png" ]; then
    echo "  Downloading ${filename}.png (form ${form_id})..."
    curl -sL "${HOME_BASE}/${form_id}.png" -o "${SPRITE_DIR}/${filename}.png"
    sleep 0.1
  else
    echo "  OK ${filename}.png (already exists)"
  fi
done

# Champions Mega sprites: use base Pokémon HOME sprite as placeholder
echo ""
echo "=== Creating Champions Mega placeholders ==="
declare -A CHAMP_MEGA
CHAMP_MEGA[398m]=398    # Mega Staraptor
CHAMP_MEGA[545m]=545    # Mega Scolipede
CHAMP_MEGA[560m]=560    # Mega Scrafty
CHAMP_MEGA[604m]=604    # Mega Eelektross
CHAMP_MEGA[668m]=668    # Mega Pyroar
CHAMP_MEGA[687m]=687    # Mega Malamar
CHAMP_MEGA[689m]=689    # Mega Barbaracle
CHAMP_MEGA[691m]=691    # Mega Dragalge
CHAMP_MEGA[870m]=870    # Mega Falinks
CHAMP_MEGA[26mx]=26     # Mega Raichu X
CHAMP_MEGA[26my]=26     # Mega Raichu Y
for mega_file in "${!CHAMP_MEGA[@]}"; do
  base_id=${CHAMP_MEGA[$mega_file]}
  dest="${SPRITE_DIR}/${mega_file}.png"
  base="${SPRITE_DIR}/${base_id}.png"
  if [ ! -f "$dest" ]; then
    if [ -f "$base" ]; then
      echo "  Creating placeholder ${mega_file}.png from ${base_id}.png..."
      cp "$base" "$dest"
    else
      echo "  Downloading base ${base_id}.png first, then copying..."
      curl -sL "${HOME_BASE}/${base_id}.png" -o "$base"
      sleep 0.1
      cp "$base" "$dest"
    fi
  else
    echo "  OK ${mega_file}.png (already exists)"
  fi
done

echo ""
echo "Done! Sprites downloaded to ${SPRITE_DIR}/"
