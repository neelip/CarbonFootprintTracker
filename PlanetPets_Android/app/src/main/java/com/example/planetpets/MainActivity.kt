package com.example.planetpets

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.content.Intent
import android.view.View

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        setTitle("Welcome to Planet Pets!")
    }

    fun onButtonClick(v:View) {
        val myIntent = Intent(getBaseContext(), Main2Activity::class.java)
        startActivity(myIntent)
    }
}
