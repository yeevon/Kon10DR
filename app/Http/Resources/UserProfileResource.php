<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserProfileResource extends JsonResource
{
	/**
	 * Transform the resource into an array.
	 *
	 * @return array<string, mixed>
	 */
	public function toArray(Request $request): array
	{
		return [
			'member_id' => $this->member_id,
			'email' => $this->email,
			'first_name' => $this->first_name,
			'last_name' => $this->last_name,
			'dob' => $this->dob?->format('d/m/Y') ?? null,
			'about_me' => $this->about_me,
			'phone_no' => $this->phone_no,
			'country' => $this->country,
			'youtube_link' => $this->youtube_link,
			'twitch_link' => $this->twitch_link,
			'instagram_link' => $this->instagram_link,
			'facebook_link' => $this->facebook_link,
			'twitter_link' => $this->twitter_link,
			'discord' => $this->discord,
			'games_selection' => $this->games_selection,
		];
	}
}
