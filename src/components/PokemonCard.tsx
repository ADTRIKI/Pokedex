import React from 'react';
import { Pokemon } from '../types/pokemon';
import { cn } from '../utils/cn';

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick: (pokemon: Pokemon) => void;
}

const typeColors = {
  normal: 'bg-gray-400',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-400',
  grass: 'bg-green-500',
  ice: 'bg-blue-200',
  fighting: 'bg-red-700',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-600',
  flying: 'bg-indigo-400',
  psychic: 'bg-pink-500',
  bug: 'bg-lime-500',
  rock: 'bg-yellow-800',
  ghost: 'bg-purple-700',
  dragon: 'bg-indigo-700',
  dark: 'bg-gray-800',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-300',
};

export function PokemonCard({ pokemon, onClick }: PokemonCardProps) {
  return (
    <div
      onClick={() => onClick(pokemon)}
      className="bg-white rounded-lg shadow-lg p-4 cursor-pointer transform transition-transform hover:scale-105"
    >
      <div className="relative">
        <img
          src={pokemon.sprite}
          alt={pokemon.name}
          className="w-32 h-32 mx-auto"
          loading="lazy"
        />
        <span className="absolute top-0 right-0 text-sm text-gray-500">
          #{pokemon.id.toString().padStart(3, '0')}
        </span>
      </div>
      <h3 className="text-xl font-semibold capitalize text-center mt-2">
        {pokemon.name}
      </h3>
      <div className="flex gap-2 justify-center mt-2">
        {pokemon.types.map((type) => (
          <span
            key={type}
            className={cn(
              'px-2 py-1 rounded-full text-white text-sm capitalize',
              typeColors[type as keyof typeof typeColors]
            )}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}